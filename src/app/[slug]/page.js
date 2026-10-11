import Link from 'next/link';

const API_URL = 'https://repositorio.dankas.cc/custom/blog';

function formatarData(dataString) {
  if (!dataString) return '';
  const [ano, mes, dia] = dataString.split('-');
  return `${dia}/${mes}/${ano}`;
}

function tratarImagensTrilium(html) {
  if (!html) return '';
  return html.replace(
    /src="[^"]*api\/(images|attachments)\/([^\/"]+)[^"]*"/g,
    `src="${API_URL}?image=$2" className="rounded-lg max-w-full h-auto my-4 shadow-sm mx-auto block"`
  );
}

export default async function SlugPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const res = await fetch(`${API_URL}?resolveSlug=${slug}`, { 
      cache: 'force-cache' 
    });
  if (!res.ok) return <p className="text-center mt-10 text-slate-500">Página não encontrada (404).</p>;
  
  const dados = await res.json();

  // Função auxiliar para renderizar listas de posts (Categorias ou Tags)
  const renderizarLista = (titulo, posts) => (
    <div>
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1">← Ver todas as publicações</Link>
        <h2 className="text-2xl font-bold text-slate-800">{titulo}</h2>
      </div>
      {(!posts || posts.length === 0) ? (
        <p className="text-center text-slate-500">Nenhum texto encontrado.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <span className="text-xs font-semibold text-slate-400 block mb-2">{formatarData(post.date)}</span>
              <Link href={`/${post.slug}`} className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition block mb-3">
                {post.title}
              </Link>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link key={tag.slug} href={`/${tag.slug}`} className="text-xs font-medium text-slate-500 hover:text-indigo-600">
                      #{tag.nome}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );

  if (dados.tipo === 'categoria') return renderizarLista(<span>Categoria: <span className="text-indigo-600">{dados.nome}</span></span>, dados.posts);
  if (dados.tipo === 'tag') return renderizarLista(<span>Tag: <span className="text-indigo-600">#{dados.nome}</span></span>, dados.posts);

  if (dados.tipo === 'post') {
    const conteudoTratado = tratarImagensTrilium(dados.content);
    return (
      <article>
        <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-6 inline-flex items-center gap-1">← Voltar para a lista</Link>
        <header className="mb-8 mt-4 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{dados.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
            <span className="text-slate-400">{formatarData(dados.date)}</span>
            <span className="text-slate-300">•</span>
            <Link href={`/${dados.categoriaSlug}`} className="font-bold text-indigo-600 hover:underline">{dados.categoria}</Link>
          </div>
          {dados.tags && dados.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {dados.tags.map((tag) => (
                <Link key={tag.slug} href={`/${tag.slug}`} className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-200">
                  #{tag.nome}
                </Link>
              ))}
            </div>
          )}
        </header>
        <div className="prose prose-slate max-w-none bg-white p-8 rounded-xl border border-slate-200 shadow-sm" dangerouslySetInnerHTML={{ __html: conteudoTratado }} />
      </article>
    );
  }
}

export async function generateStaticParams() {
  const slugs = [];

  const addSlugs = async (action) => {
    const res = await fetch(`${API_URL}?action=${action}`);
    if (res.ok) {
      const items = await res.json();
      items.forEach(item => slugs.push({ slug: item.slug }));
    }
  };

  // Coleta categorias, tags e posts para geração estática
  await Promise.all([addSlugs('categories'), addSlugs('tags'), addSlugs('posts')]);

  return slugs;
}