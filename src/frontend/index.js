import { EvaluateArticle } from './scripts/handleSubmit'

import './styles/footer.scss'
import './styles/header.scss'
import './styles/my-content.scss'
import './styles/page.scss'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('result').style.display = "none"
    document.getElementById('error').style.display = "none"

    var btn = document.getElementById('submitButton')
    btn.addEventListener('click', (e) => {
        return EvaluateArticle(e)
    })
})
