import {useSearchParams} from "react-router";


function ListComponent () {

    const [searchParams] = useSearchParams()

    // 문자열로 들어오므로 숫자로 파싱
    const page = parseInt(searchParams.get('page') ?? '1', 10)
    const size = parseInt(searchParams.get('size') ?? '10', 10)


    return (
        <></>
    )
}

export default ListComponent