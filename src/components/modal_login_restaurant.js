import React, { useContext, useState, useRef, useEffect } from 'react'
import { Context } from '../store/appContext'

const ModalLoginRestaurant = props => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        view: 1
    })
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)
    const fifthRef = useRef(null)

    const firstRefFocus = (e) => {
        if (e.key === "Enter") {
            secondRef.current.focus()
        }
    }
    const secondRefFocus = (e) => {
        if (e.key === "Enter") {
            thirdRef.current.focus()
        }
    }
    const fourthRefFocus = (e) => {
        if (e.key === "Enter") {
            fifthRef.current.focus()
        }
    }
    const ForgotPassword = () => {
        setState({ view: 2 })
    }
    const BackToLogin = () => {
        setState({ view: 1 })
    }
    const Confirmation = () => {
        BackToLogin()
        actions.getConfirmation()
        alert("Check your email")
    }
    useEffect(() => {
        if (firstRef !== null) {
            firstRef.current.focus()
        }
    }, [props.login])
    useEffect(() => {
        if (state.view ===2) {
            fourthRef.current.focus()
        }
    }, [state.view])

    return (

        <div className="modal" id="modal_login_restaurant" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {state.view === 1 && (
                        <>
                            <div className="modal-header">
                                Login
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => BackToLogin()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="form-group modal-body">
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label text-muted">Email:</label>
                                    <input
                                        ref={firstRef}
                                        type="text"
                                        name="email"
                                        id="LoginConsumerEmail"
                                        className="form-control"
                                        value={store.email}
                                        onKeyDown={(e) => { firstRefFocus(e) }}
                                        onChange={e => actions.handleChange(e)}>

                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label text-muted">Password:</label>
                                    <input
                                        ref={secondRef}
                                        type="password"
                                        name="password_hash"
                                        id="LoginConsumerPassword"
                                        className="form-control"
                                        value={store.password_hash}
                                        onKeyDown={(e) => { secondRefFocus(e) }}
                                        onChange={e => actions.handleChange(e)}>

                                    </input>
                                    <small className='text-muted border-bottom' onClick={() => ForgotPassword()}>forgot password</small>
                                </div>
                                <div className="modal-footer d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary mr-1"
                                        data-dismiss="modal"
                                        ref={thirdRef}
                                        onClick={() => actions.loginRestaurantPost()}>
                                        Access
                                    </button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => BackToLogin()}>Cancel</button>
                                </div>
                            </div>
                        </>
                    )}
                    {state.view === 2 && (
                        <>
                            <div className="modal-header">
                                Login
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => BackToLogin()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="form-group modal-body">
                                <label htmlFor="username" className="form-label text-muted">Enter email to reset password</label>
                                <input
                                    ref={fourthRef}
                                    type="text"
                                    name="email"
                                    id="LoginConsumerEmail"
                                    onKeyDown={(e) => { fourthRefFocus(e) }}
                                    value={store.email}
                                    onChange={e => actions.handleChange(e)}
                                    className="form-control">
                                </input>
                            </div>
                            <div className="modal-footer d-flex justify-content-end">
                                <button
                                    ref={fifthRef}
                                    type="button"
                                    className="btn btn-primary mr-1"
                                    data-dismiss="modal"
                                    onClick={() => Confirmation()}>
                                    Send
                                    </button>
                                <button type="button" className="btn btn-danger mr-1" data-dismiss="modal" onClick={() => BackToLogin()}>Cancel</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ModalLoginRestaurant