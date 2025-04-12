import {useSearchParams} from "react-router";
import {getNumber} from "~/util/numUtil";
import {useEffect, useState} from "react";
import {todoList} from "~/api/todoAPI";


function ListComponent () {

    const [searchParams] = useSearchParams()

    // 문자열로 들어오므로 숫자로 파싱
    const page = getNumber(searchParams.get('page'),1)
    const size = getNumber(searchParams.get('size'), 10)

    const [refresh, setRefresh] = useState(false)

    const [pageResult, setPageResult] = useState<PageResponse<TodoList>>()

    useEffect(() => {

        console.log("---------------------")

        todoList(String(page), String(size)).then(result => {

            console.log(result)
            setPageResult(result)
        });


    },[page,size])



    return (
        <>
            {pageResult && (
                <div>
                    <div>Result 존재함</div>
                </div>
            )}
        </>
    )
}

export default ListComponent