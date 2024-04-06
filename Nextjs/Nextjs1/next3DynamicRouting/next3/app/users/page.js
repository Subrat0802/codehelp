import Link from "next/link"

const page = () => {
  return (
    <div>
        <Link href="users/1"><h1>User1</h1></Link>
        <Link href="users/2"><h1>User2</h1></Link>
        <Link href="users/3"><h1>User3</h1></Link>
        <Link href="users/4"><h1>User4</h1></Link>
        <Link href="users/5"><h1>User5</h1></Link>
    </div>
  )
}

export default page