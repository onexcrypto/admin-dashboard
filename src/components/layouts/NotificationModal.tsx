import React from 'react'

const NotificationModal = () => {
    return (
        <div>
            {/* removeNotificationModal */}
            <div id="removeNotificationModal" className="modal fade zoomIn" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close" />
                    </div>
                    <div className="modal-body">
                        <div className="mt-2 text-center">
                        {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width: 100, height: 100}} /> */}
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                        </div>
                        </div>
                        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
                        </div>
                    </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
            {/* /.modal */}

        </div>
    )
}

export default NotificationModal