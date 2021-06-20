
import notfound from '../../assets/notfound.webp';


export default function NotFoundSearch(){
    return(
        <div style={{textAlign:'center',marginTop:'100px'}}>
        <h3>
        Oops... we didn't find anything that matches this search
        </h3>
        <p>
        Try to search for something more general, change the filters or check for spelling mistakes
        </p>
        <img src={notfound} alt="" />
        </div>
    )
}