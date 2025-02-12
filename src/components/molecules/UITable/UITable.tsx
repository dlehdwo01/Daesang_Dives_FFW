export const UITabel = ({ thead, tbody }: { thead: string[]; tbody: string[][] }) => {
  return (
    <div className="border-2 border-zinc-300 rounded overflow-y-auto">
      <table className="w-full h-max ">
        <thead className="sticky top:0 inset-0">
          <tr className="text-center border-b border-zinc-300 bg-zinc-100 ">
            {thead.map((item) => (
              <th className="border-r-zinc-300 border-r p-2">{item}</th>
            ))}
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {tbody.map((record) => {
            return (
              <tr className={`text-center border-zinc-300  `}>
                {record.map((item) => {
                  return (
                    <td className="border-r-zinc-300 border-r p-1 max-w-[50px] truncate">{item}</td>
                  );
                })}
                <td className=" text-center p-1">
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
