//import Styles from '!style-loader!css-loader?modules./styles.css';   注意这里需要每个规则前面都要有！通过前置所有规则及使用 !，可以对应覆盖到配置中的任意 loader。

import Styles from './styles.css';
import search from  "./search.js"
document.write('this is app.js')
search()