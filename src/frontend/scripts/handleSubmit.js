const { AnalyzeArticle } = require("./dal");
import { IsLinkValid } from './helpers'

function EvaluateArticle(e) {
    e.preventDefault();
    // let link = 'https://www.meaningcloud.com/developer/documentation'
    let articleLink = document.getElementById('txt_articleLink').value

    if (!IsLinkValid(articleLink))
        return RenderError();
    try {

        AnalyzeArticle(articleLink)
            .then(res => {
                RenderResult(res.data);
            },
                err => {
                    RenderError(err)
                })
    }
    catch (ex) {
        return RenderError(ex);
    }
}

function RenderResult(result) {
    document.getElementById('error').style.display = "none"
    document.getElementById('result').style.display = "grid"

    document.getElementById('text').innerHTML = result.text
    document.getElementById('score_tag').innerHTML = result.score_tag
    document.getElementById('agreement').innerHTML = result.agreement
    document.getElementById('subjectivity').innerHTML = result.subjectivity
    document.getElementById('confidence').innerHTML = result.confidence
    document.getElementById('irony').innerHTML = result.irony

}

function RenderError(ex = '') {
    document.getElementById('error').style.display = "block"
    document.getElementById('result').style.display = "none"

    let errorMsg = ex === '' ? 'URL is NOT valid' : ex
    document.getElementById('error_message').innerHTML = errorMsg
    document.getElementById('txt_articleLink').value = ''
}

export { EvaluateArticle }