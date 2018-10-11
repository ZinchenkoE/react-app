import React, {Component} from "react";

class Conversations extends Component {
    render() {
        return (
            <div className="content">
                <div className="card">

                    <div className="card-header header-elements-inline">
                        <h5 className="card-title"> </h5>
                        <div className="header-elements">
                            <div className="list-icons">
                                <a className="list-icons-item" data-action="collapse"> </a>
                                <a className="list-icons-item" data-action="reload"> </a>
                                <a className="list-icons-item" data-action="remove"> </a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content card-body border-top-0 rounded-0 rounded-bottom mb-0">
                        <div className="tab-pane fade show active" id="james">
                            <ul className="media-list media-chat mb-3">
                                <li className="media">
                                    <div className="mr-3">
                                        <a>
                                            <img src="/img/placeholder.jpg"
                                                 className="rounded-circle" width="40" height="40" alt=""/>
                                        </a>
                                    </div>

                                    <div className="media-body">
                                        <div className="media-chat-item">Crud reran and while much withdrew
                                            ardent much crab hugely met dizzily that more jeez gent equivalent
                                            unsafely far one hesitant so therefore.
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">Tue, 10:28 am <a>
                                            <i className="icon-pin-alt ml-2 text-muted"/>
                                        </a></div>
                                    </div>
                                </li>

                                <li className="media media-chat-item-reverse">
                                    <div className="media-body">
                                        <div className="media-chat-item">Far squid and that hello fidgeted and
                                            when. As this oh darn but slapped casually husky sheared that
                                            cardinal hugely one and some unnecessary factiously hedgehog a
                                            feeling one rudely much
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">Mon, 10:24 am <a>
                                            <i className="icon-pin-alt ml-2 text-muted"/>
                                        </a></div>
                                    </div>

                                    <div className="ml-3">
                                        <a>
                                            <img src="/img/placeholder.jpg"
                                                 className="rounded-circle" width="40" height="40" alt=""/>
                                        </a>
                                    </div>
                                </li>

                                <li className="media">
                                    <div className="mr-3">
                                        <a>
                                            <img src="/img/placeholder.jpg"
                                                 className="rounded-circle" width="40" height="40" alt=""/>
                                        </a>
                                    </div>

                                    <div className="media-body">
                                        <div className="media-chat-item">Tolerantly some understood this
                                            stubbornly after snarlingly frog far added insect into snorted more
                                            auspiciously heedless drunkenly jeez foolhardy oh.
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">Wed, 4:20 pm <a>
                                            <i className="icon-pin-alt ml-2 text-muted"/>
                                        </a></div>
                                    </div>
                                </li>

                                <li className="media content-divider justify-content-center text-muted mx-0">
                                    <span className="px-2">New messages</span>
                                </li>

                                <li className="media media-chat-item-reverse">
                                    <div className="media-body">
                                        <div className="media-chat-item">Satisfactorily strenuously while
                                            sleazily dear frustratingly insect menially some shook far sardonic
                                            badger telepathic much jeepers immature much hey.
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">2 hours ago <a>
                                            <i className="icon-pin-alt ml-2 text-muted"/>
                                        </a></div>
                                    </div>

                                    <div className="ml-3">
                                        <a>
                                            <img src="/img/placeholder.jpg"
                                                 className="rounded-circle" width="40" height="40" alt=""/>
                                        </a>
                                    </div>
                                </li>

                                <li className="media">
                                    <div className="mr-3">
                                        <a>
                                            <img src="/img/placeholder.jpg"
                                                 className="rounded-circle" width="40" height="40" alt=""/>
                                        </a>
                                    </div>

                                    <div className="media-body">
                                        <div className="media-chat-item">Grunted smirked and grew less but
                                            rewound much despite and impressive via alongside out and gosh easy
                                            manatee dear ineffective yikes.
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">13 minutes ago <a
                                        >
                                            <i className="icon-pin-alt ml-2 text-muted"/>
                                        </a></div>
                                    </div>
                                </li>

                                <li className="media media-chat-item-reverse">
                                    <div className="media-body">
                                        <div className="media-chat-item">
                                            <i className="icon-menu"/>
                                        </div>
                                    </div>

                                    <div className="ml-3">
                                        <a>
                                            <img src="/img/placeholder.jpg"
                                                 className="rounded-circle" width="40" height="40" alt=""/>
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <textarea name="enter-message" className="form-control mb-3" rows="3" cols="1"
                                      placeholder="Enter your message..." />

                            <div className="d-flex align-items-center">
                                <div className="list-icons list-icons-extended">
                                    <a className="list-icons-item" data-popup="tooltip"
                                       data-container="body" title="Send photo">
                                        <i className="icon-file-picture"/>
                                    </a>
                                    <a className="list-icons-item" data-popup="tooltip"
                                       data-container="body" title="Send video">
                                        <i className="icon-file-video"/>
                                    </a>
                                    <a className="list-icons-item" data-popup="tooltip"
                                       data-container="body" title="Send file">
                                        <i className="icon-file-plus"/>
                                    </a>
                                </div>

                                <button type="button" className="btn bg-teal-400 btn-labeled btn-labeled-right ml-auto">
                                    <b><i className="icon-paperplane"/></b>ВІДПРАВИТИ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conversations;
