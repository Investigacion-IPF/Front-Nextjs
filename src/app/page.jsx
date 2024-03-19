import Table from "@/components/Table";
import Link from "next/link";

export const dynamic = "force-dynamic"


export default function Home() {
  return (
    <main className="container">
      <div className="d-flex justify-content-center text-light">
        <h1 className="fw-bold">CRUD - FASTAPI - NESTJS</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" style={{ width: '90%' }} name="search" className="form-control" placeholder="Search something..."/>
        <Link className="btn btn-primary" href={'/new'}>Add task</Link>
      </div>

      <div>
        <Table />
      </div>

    </main>
  );
}
