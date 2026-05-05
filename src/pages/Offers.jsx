function Offers() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2>Offers</h2>
          <p className="text-sm text-slate-600">Listado de ofertas</p>
        </div>
        <button
          type="button"
          className="shrink-0 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-white transition-colors"
        >
          Crear
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="min-w-245 w-full table-auto">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Oferta</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Empresa</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Ubicación</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Perfil</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Salario</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Tech</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Estado</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Publicado</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600">Recruiter</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-600 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">Backend Developer (Node.js)</p>
                    <p className="mt-0.5 text-xs text-slate-500 truncate">ID: 1</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-700 whitespace-nowrap">AndesFintech</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-700 whitespace-nowrap">Bogotá, CO</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 whitespace-nowrap">
                      Hybrid
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 whitespace-nowrap">
                      Mid
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-700 whitespace-nowrap">5500–7500 USD</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 whitespace-nowrap">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 whitespace-nowrap">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 whitespace-nowrap">
                      PostgreSQL
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 whitespace-nowrap">
                      Docker
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    open
                  </span>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-700 whitespace-nowrap">2026-02-10T12:00:00.000Z</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-700 whitespace-nowrap">2</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="rounded-lg px-3 py-2 text-xs font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="rounded-lg px-3 py-2 text-xs font-semibold border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Offers;
