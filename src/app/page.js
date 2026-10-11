import Link from 'next/link';

const API_URL = 'https://repositorio.dankas.cc/custom/blog';

function formatarData(dataString) {
  if (!dataString) return '';
  const [ano, mes, dia] = dataString.split('-');
  return `${dia}/${mes}/${ano}`;
}

export default async function Home() {
  const res = await fetch(`${API_URL}?action=posts`);
  const posts = await res.json();

  if (!posts || posts.length === 0) {
    return <p className="text-center text-slate-500">Nenhum texto publicado ainda.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-slate-700">Publicações Recentes</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-slate-400">
                {formatarData(post.date)}
              </span>
              {/* O link da categoria agora aponta para o slug na raiz */}
              <Link href={`/${post.categoriaSlug}`} className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full hover:underline">
                {post.categoria}
              </Link>
            </div>

            {/* O link do post agora aponta para o slug direto */}
            <Link href={`/${post.slug}`} className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition block mb-3">
              {post.title}
            </Link>

            {/* Renderização das Tags como links clicáveis */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
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
    </div>
  );
}