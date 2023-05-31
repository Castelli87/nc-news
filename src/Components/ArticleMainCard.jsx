import {useParams} from 'react-router-dom'

function ArticleMainCard(){
    const {params}= useParams()
    console.log(params)
return (
    <h1>Main Card</h1>
)
}

export default ArticleMainCard