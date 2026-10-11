import Link from 'next/link';

const API_URL = 'https://repositorio.dankas.cc/custom/blog';

export default async function TagsPage() {
  const res = await fetch(`${API_URL}?action=tags`,  { 
      cache: 'force-cache' 
    });
  const tags = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
        Todas as Tags
      </h1>
      
      {(!tags || tags.length === 0) ? (
        <p className="text-slate-500">Nenhuma tag encontrada.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <Link 
              key={tag.slug} 
              href={`/${tag.slug}`} 
              className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              #{tag.nome}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}