<template>
    <div class="right-menu">
        <div class="me-info" v-if="!!userState" @click="goMy">
            <div class="me-avator" :style="{backgroundImage:`url(${userState.avatar_url})`}"></div>
            <div class="me-name">{{userState.loginname}}</div>
        </div>
        <div class="login-entry" @click="goLogin" v-else>
            <p class="text">登录</p>
            <div class="login-icon"></div>
        </div>
        <ul class="other-items">
            <li class="item" @click="onRelease">发表</li>
            <li class="item message" @click="onMessage">消息</li>
        </ul>
        <a class="git-hub" href="https://github.com/jack-team/cnode">
            <i class="git-address"></i>
            <p class="git-text">gitHub</p>
        </a>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "leftMenu",
        computed:{
            ...mapState({
                userState: state => state.user.userInfo
            })
        },
        created(){
            this.timeOut=[];
        },
        beforeDestroy(){
            this.timeOut.forEach(t=>clearTimeout(t));
        },
        methods:{
            goLogin(){
                const modal = this.$openLogin(()=> {
                    modal.show = false
                });
            },
            onRelease(){
                this.$router.push(`/release`);
            },
            goMy(){
                const { loginname } = this.userState;
                this.$router.push(`/user/${loginname}`);
            },
            onMessage(){
                const isLogin = getUserLogin();
                this.$router.push(`/message`);
            }
        }
    }
</script>
<style scoped lang="scss">
    .right-menu {
        width: 200px;
        height: 100%;
        background: #fff;
        padding: 0 10px;
        position: relative;
    }
    .me-info,.login-entry{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ececec;
        padding: 20px 0;
        position: relative;
        font-size: 18px;
    }
    .me-info {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 20px;
            height: 20px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("./../image/arrow_right.png");
        }
        .me-avator {
           width:40px;
           height:40px;
           border-radius: 20px;
           background-size: cover;
           background-repeat: no-repeat;
           background-position: center;
        }
        .me-name {
           font-size: 16px;
           color: #555;
           margin-left: 10px;
        }
    }
    .login-entry {
         justify-content: center;
        .login-icon {
            width: 24px;
            height: 24px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("./../image/login_icon@2x.png");
        }
        .text {
            font-size: 16px;
            color: #666;
            margin-right: 10px;
        }
    }
    .other-items {
        .item {
            height: 60px;
            border-bottom: 1px solid #ececec;
            position: relative;
            line-height: 60px;
            padding-left: 40px;
            font-size: 16px;
            color: #545454;
            &:before,&:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            &:before {
                width: 24px;
                height: 24px;
                left: 0;
                background-image: url("./../image/send_icon.png");
            }
            &:after {
                width: 20px;
                height: 20px;
                right: 0;
                background-image: url("./../image/arrow_right.png");
            }
        }

        .message {
           &:before {
               background-image: url("./../image/message_icon.png");
               width: 22px;
               height: 22px;
           }
        }
    }

    .git-hub {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .git-address {
        display: block;
        width: 33px;
        height: 32px;
        background-image: url("./../image/github_icon.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 30px auto 0 auto;
    }

    .git-text {
        font-size: 12px;
        text-align: center;
        margin-top: 6px;
        color: #333;
    }
</style>