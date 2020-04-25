import React from 'react'

export default function ModalDelete(props) {
    return (

        <div class="modal" id="modal_confirmation_delete" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Esta accion borrara el producto PERNAMENTEMENTE </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={() => {
                            props.delete(props.url,
                                props.function,
                                props.url2)
                        }}
                        >sure</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}