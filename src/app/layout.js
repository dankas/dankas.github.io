import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Meu Blog Trilium',
  description: 'Blog gerado a partir do TriliumNext',
};

const API_URL = 'https://repositorio.dankas.cc/custom/blog';

export default async function RootLayout({ children }) {
  // 1. Declaramos a variável vazia para evitar o erro
  let categorias = [];

 // 2. Buscamos as categorias na API do Trilium (Agora com force-cache)
  try {
    const res = await fetch(`${API_URL}?action=categories`, { 
      cache: 'force-cache' 
    });
    if (res.ok) categorias = await res.json();
  } catch (error) {
    console.error("Erro ao buscar categorias", error);
  }

  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-800 font-sans min-h-screen">
        
        {/* Header e Menu de Navegação */}
        <header className="bg-white border-b border-slate-200 py-6 mb-8 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition">
              📝 Meu Repositório
            </Link>
            
            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-indigo-600 transition">Início</Link>
              <Link href="/tags" className="hover:text-indigo-600 transition">Tags</Link>
              <Link href="/busca" className="hover:text-indigo-600 transition">🔍 Buscar</Link>
              <span className="text-slate-300">|</span>
              
              {/* Agora o mapeamento vai funcionar porque 'categorias' existe e tem dados! */}
              {categorias.map((cat) => (
                <Link key={cat.slug} href={`/${cat.slug}`} className="hover:text-indigo-600 transition">
                  {cat.nome}
                </Link>
              ))}
            </nav>
            
          </div>
        </header>

        {/* Conteúdo dinâmico das páginas */}
        <main className="max-w-3xl mx-auto px-4 pb-16">
          {children}
        </main>
        
      </body>
    </html>
  );
}