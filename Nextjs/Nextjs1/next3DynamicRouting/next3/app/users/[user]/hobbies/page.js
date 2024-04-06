import Link from "next/link"

const page = ({params}) => {
    console.log(params.user);
    let a = params.user;
  return (
    <div>
        <h1>Your hobbies: </h1>
        <ul>
            <Link href={`../${a}/hobbies/wrestling`}>Wrestling</Link>
            <br />

            <Link href={`../${a}/hobbies/Boxing`}>Boxing</Link>
            <br />

            <Link href={`../${a}/hobbies/Cycling`}>Cycling</Link>
            <br />

            <Link href={`../${a}/hobbies/Ridingbike`}>Riding bike</Link>
            <br />

            <Link href={`../${a}/hobbies/WWE`}>WWE</Link>
            <br />
        </ul>
    </div>
  )
}

export default page