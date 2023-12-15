const UserInfo = ({user,handleSignOut}) => {
  return (
    <div className="py-4">
          <div className="border-2 p-4 border-blue-200 w-[400px]  mx-auto ">
              <div>
                  <h3 className="font-mono text-2xl"><span className="font-bold">Name:</span> {user.displayName}</h3>
                  <p className="font-mono text-2xl"><span className="font-bold">Email:</span> {user.email}</p>
              </div>
              <div className="flex justify-end">
                  <button className="font-semibold bg-red-500 p-1 rounded-sm mt-2" onClick={handleSignOut}>Sign Out</button>
              </div>
          </div>
    </div>
  )
}
export default UserInfo