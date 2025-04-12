import {useSearchParams} from "react-router";
import {getNumber} from "~/util/numUtil";


function ListComponent () {

    const [searchParams] = useSearchParams()

    // 문자열로 들어오므로 숫자로 파싱
    const page = getNumber(searchParams.get('page'),1)
    const size = getNumber(searchParams.get('size'), 10)


    return (
        <></>
    )
}

export default ListComponent