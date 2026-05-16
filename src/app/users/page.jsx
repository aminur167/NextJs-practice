import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h2>Users are coming here</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="card bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.name}</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn">Show Info</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
