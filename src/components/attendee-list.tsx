import { Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="p-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none"
            placeholder="Buscar participante..."
          ></input>
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-3 px-4 font-semibold text-sm">
              <input type="checkbox" />
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-left">Código</th>
            <th className="py-3 px-4 font-semibold text-sm text-left">Participantes</th>
            <th className="py-3 px-4 font-semibold text-sm text-left">Data de inscrição</th>
            <th className="py-3 px-4 font-semibold text-sm text-left">Data do check-in </th>
            <th className="py-3 px-4 font-semibold text-sm text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/10">
            <td className="py-3 px-4 text-sm text-zinc-300">
              <input type="checkbox" />
            </td>
            <td className="py-3 px-4 text-sm text-zinc-300">551099</td>
            <td className="py-3 px-4 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Igor Nunes Teixeira</span>
                    <span>igornteixeira48@hotmail.com</span>
                </div>
            </td>
            <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
            <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
            <td className="py-3 px-4 text-sm text-zinc-300"></td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
                <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                    Mostrando 10 de 228 itens 
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                    Página 1 de 23
                </td>
            </tr>
        </tfoot>
      </table>
    </div>
    </div>
  );
}
