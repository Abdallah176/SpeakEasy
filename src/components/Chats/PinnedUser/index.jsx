import styles from './index.module.css'
import imgUrl from '../../../assets/avatar-1.jpg'

export default function PinnedUser() {
    return (
    <div className='col-12 pt-3'>
        <div id={styles.PinnedUser}>
            <img src={imgUrl}/>
            <h5>Name</h5>
        </div>
    </div>
    )
}
