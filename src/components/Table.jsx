
async function getTaks() {
    const req = await fetch(process.env.ENDPOINT + '/task')
    return await req.json();
}

const Table = async () => {

    const tasks = await getTaks();

    console.log(tasks)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Done</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(task => (
                        <tr key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>{task.done ? 'Terminado' : 'Pendinente'}</td>
                            <td>Edit Delete</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table