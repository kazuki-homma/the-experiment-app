import {useRouter} from 'next/router';

export default function Name() {
    const router = useRouter();
    console.log(router);
    return <h1>{router.query.name}のページです</h1>;
}