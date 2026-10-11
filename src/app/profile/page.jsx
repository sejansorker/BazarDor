"use client"
import { authClient } from "@/lib/auth-client"
import Container from "../components/Container"


const ProfilePage = () => {
    const handleUpdate = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const newUserData = Object.fromEntries(formData.entries())
        console.log(newUserData);
        await authClient.updateUser({
            ...newUserData
        })
      }
    const {data: session} = authClient.useSession()
      const user = session?.user
      const handleOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/")
          router.refresh()
        },
      },
    })
  }
      

  return (
    <div className="min-h-screen bg-[#F0F4EF] py-10">
      <Container>
        <div className="mx-auto max-w-[400px] lg:max-w-[736px]">
          <h1 className="font-bangla text-xl font-bold text-black">আমার প্রোফাইল</h1>
          <p className="font-bangla mb-4 text-xs text-gray-600">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-gray-200 bg-white/70 p-4">
            <div className="flex items-center gap-4">
              <img
  alt={user?.name}
  src={
    user?.image ||
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  }
  className="h-10 w-10 rounded-xl object-cover"
/>
              <div>
                <h2 className="text-base font-medium text-gray-900">{user?.name}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button onClick={handleOut} className="font-bangla cursor-pointer rounded-md border border-red-500 px-3 py-1.5 text-sm text-red-500 transition hover:bg-red-50">
              ↩ সাইন আউট
            </button>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
            <h3 className="font-bangla mb-5 text-base font-medium text-black">তথ্য</h3>
            <form onSubmit={handleUpdate} className="px-2 pb-3">
  <label className="font-bangla mb-1 block text-sm text-gray-800">নাম</label>
  <input
    type="text"
    name="name"
    defaultValue={user?.name}
    key={user?.name}
    className="mb-4 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
  />
  <button
    type="submit"
    className="font-bangla w-full cursor-pointer rounded-md bg-[#008A3D] py-2 text-sm text-white transition hover:bg-[#007533]"
  >
    আপডেট
  </button>
</form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProfilePage
