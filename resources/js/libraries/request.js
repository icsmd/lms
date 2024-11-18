import axios from "axios";
import Utilities from './utilities.js'
export default {
    mixins: [
        Utilities
    ],
    data () {
        return {

        }
    },
    methods: {
        getRequest: function (sUrl, mThen, oParam = []) {
            sUrl = '/' + sUrl;
            let oHeaders = {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            };
            return new Promise((mResolve) => {
                axios({
                    method: 'get',
                    url   : sUrl,
                    params: oParam,
                    headers: oHeaders
                })
                    .then((oResponse) => {
                        mThen(oResponse.data);
                    })
                    .catch(this.catchRequest);
                mResolve();
            });
        },


        /**
         * Axios POST request
         *
         * @param sUrl   string
         * @param oParam object
         * @param mThen  mixed
         * @return {Promise<any>}
         */
        postRequest: function (sUrl, oParam, mThen) {
            let oHeaders = {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            };
            sUrl = '/' + sUrl;
            return new Promise((mResolve) => {
                axios.post(sUrl, oParam, {headers: oHeaders})
                    .then((oResponse) => {
                        mThen(oResponse.data);
                    })
                    .catch(this.catchRequest);
                mResolve();
            });
        },

        catchRequest: function (mResponse) {
            let sDefaultMsg = mResponse.message;
            let sResponseMsg = mResponse.response.data.message;
            let sFinalMessage = sResponseMsg === null ? sDefaultMsg : sResponseMsg;
            
            this.showErrorAlert(sFinalMessage);
        }
    }
}