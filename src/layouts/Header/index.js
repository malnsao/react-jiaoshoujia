import React from 'react';

import styles from './index.less';

import { Badge, Button, Form, Icon, Input, Layout, Menu, message, Modal, Popover } from 'antd';

import { locale, trans } from '@/util/i18n.js';

import icon from '@/assets/icon.less';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleFolder: false,// 添加至收藏标识
            folderList: [],// 文件夹集合
        }
    }

    shoppingHover(){
        fetch('/api/profile')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });

        fetch('/api/profile1')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });

    }

    shoppingNumber(){}

    showModalNew = () => {}

    establishFolder = () => {}

    getFolderName = () => {}

    checkLange = () => {}

    faceHover(){}

    render() {
        const pathname = window.location.pathname;
        let { folderList, getFolderName, showEstablishFolder } = this.state;
        const lg = locale();
        return (
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <a href="/" className={styles.logo}>
                        <div className={styles.logoImg}>
                            <img src={require('../../assets/logo.png')} alt="" />
                        </div>
                        <div className={styles.logoTitle}>
                            <p>{trans('global.logo', '云谷相册')}</p>
                            <p>YUNGU  ALBUM</p>
                        </div>
                    </a>
                    <div className={styles.headerRight}>

                        <div className={styles.uploadMedia}>
                            <span>
                                <a href={pathname + '#/media'}>
                                    <Icon type="cloud-upload" />
                                </a>
                            </span>
                        </div>

                        <div className={styles.collector}>

                            <Popover placement="bottom" content={this.shoppingHover()} trigger="hover">
                                <Badge
                                    count={this.shoppingNumber()}
                                >
                                    <span onClick={this.showDrawerCollector}>
                                        <Icon type="shopping-cart" />
                                    </span>
                                </Badge>
                            </Popover>

                            <Modal
                                title="添加收藏夹"
                                visible={this.state.visibleFolder}
                                onOk={this.handleOkFolder}
                                onCancel={this.handleCancelFolder}
                            >
                                <div className={styles.modalBox}>
                                    {folderList && folderList.length ? folderList.map((item, index) => { return <p key={index} onClick={this.AddToCollector.bind(this, index)}><Icon type="book" />{item.bookmark_name}</p> }) : ''}
                                    <span
                                        className={styles.newCollection}
                                        onClick={this.showModalNew.bind(this)}
                                    >
                                        <Icon type="plus-circle" style={{ marginRight: 5, fontSize: 20, color: '#9B9B9B' }} />新建收藏夹
                    
                  </span>
                                    <div className={showEstablishFolder ? styles.addNewCollection : styles.hide}>
                                        <p>新建收藏夹</p>
                                        <Form onSubmit={this.establishFolder.bind(this)}>
                                            <Form.Item>
                                                <Input
                                                    size="large"
                                                    placeholder="收藏夹名称"
                                                    value={getFolderName}
                                                    style={{ width: 368, marginRight: 37 }}
                                                    onChange={this.getFolderName.bind(this)} />
                                                <Button
                                                    htmlType="submit"
                                                >
                                                    {trans('global.submitButton', '提交')}
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        <div className={styles.zh_En}>
                            {lg == 'en' && (
                                <span onClick={this.checkLange.bind(this, "zh")} >
                                    <i className={icon.iconfont}>&#xe64f;</i>
                                </span>
                            )}
                            {lg != 'en' && (
                                <span onClick={this.checkLange.bind(this, "en")} >
                                    <i className={icon.iconfont}>&#xe61a;</i>
                                </span>
                            )}
                        </div>

                        <div className={styles.face}>
                            <Popover placement="bottom" content={this.faceHover()} trigger="hover">
                                <span onClick={this.showDrawerFace}>
                                    <Icon type="user" />
                                </span>
                            </Popover>

                        </div>
                    </div>
                </div>
            </header>
        )
          
    }
}
export default Header