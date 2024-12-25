import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="m-auto">
        <div className="flex flex-row gap-5">
          <div className="w-48 h-24 bg-indigo-400 flex justify-center items-center cursor-pointer">
            <h5 className="text-2xl text-white">
              <Link href="/dashboard/portfolios">Portfolios</Link>
            </h5>
          </div>
          <div className="w-48 h-24 bg-blue-400 flex justify-center items-center cursor-pointer">
            <h5 className="text-2xl text-white">Stocks</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
