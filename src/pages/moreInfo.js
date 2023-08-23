import {Button} from "../components/button"
import {useNavigate, useParams} from "react-router"
import {useSelector} from "react-redux"


export const MoreInfo = () => {
    const params = useParams()
    const navigate = useNavigate()

    const { list } = useSelector( store => ({
        list: store.userListReducer.list
    }) )

    const current = list?.find((user) => user?.id === + params?.id)

    return (
        <div className={'moreInfo'}>
            <div className={'info'}>
                <div className={'img-container'}>
                    <img src={current.img} alt={'user image'}/>
                </div>
                <div className={'personal-info'}>
                    <div>
                        <span>name:</span>
                        <p>{current.Name}</p>
                    </div>
                    <div>
                        <span> surname:</span>
                        <p>{current.Surname}</p>
                    </div>
                    <div>
                        <span>Age:</span>
                        <p>{current.Age}</p>
                    </div>
                    <div>
                        <span>email:</span>
                        <p>{current.Email}</p>
                    </div>
                    <div>
                        <span>Gender:</span>
                        <p>{current.Gender}</p>
                    </div>
                    
                    <Button className={'more-info-button'} text={'user list'} onClick={() => navigate('/home')}/>
                </div>

            </div>

        </div>
    )
}