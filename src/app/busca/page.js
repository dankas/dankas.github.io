"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const API_URL = 'https://repositorio.dankas.cc/custom/blog';

export default function BuscaPage() {
  const [posts, setPosts] = useState([]);
  const [termo, setTermo] = useState('');
  const [carregando, setCarregando] = useState(true);

  // Busca o índice de posts quando a página carrega
  useEffect(() => {
    fetch(`${API_URL}?action=posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setCarregando(false);
      });
  }, []);

  // Filtra posts por título, categoria ou tags
  const resultados = posts.filter(post => {
    const buscaLower = termo.toLowerCase();
    const tituloMatch = post.title.toLowerCase().includes(buscaLower);
    const catMatch = post.categoria.toLowerCase().includes(buscaLower);
    const tagMatch = post.tags.some(t => t.nome.toLowerCase().includes(buscaLower));
    return tituloMatch || catMatch || tagMatch;
  });

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
        Buscar
      </h1>
      
      <input
        type="text"
        placeholder="Digite para buscar..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        className="w-full p-4 rounded-xl border border-slate-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition mb-8 text-slate-800"
      />

      {carregando ? (
        <p className="text-slate-500">Carregando dados...</p>
      ) : termo === '' ? (
        <p className="text-slate-500">Comece a digitar para ver os resultados.</p>
      ) : (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-400 mb-4">
            {resultados.length} resultado(s) encontrado(s)
          </p>
          {resultados.map(post => (
            <Link key={post.id} href={`/${post.slug}`} className="block bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-slate-900">{post.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                {post.categoria} • {post.date.split('-').reverse().join('/')}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}