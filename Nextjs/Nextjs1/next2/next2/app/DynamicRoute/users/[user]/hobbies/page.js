import Link from "next/link";
const page = ({params}) => {
    console.log(params);
    let a = params.user;
  return (
    <div>
      Hobbies
      <ul>
        <Link href={`../${a}/hobbies/wrestling`}>Wrestling</Link>
        <br />
        <Link href="users/user/hobbies/boxing">Boxing</Link>
        <br />
        <Link href="users/user/hobbies/calesthetics">Calesthetics</Link>
        <br />
        <Link href="users/user/hobbies/martialarts">Martial Arts</Link>
        <br />
      </ul>
    </div>
  );
};

export default page;
