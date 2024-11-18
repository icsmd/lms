import moment from 'moment'
import Swal from 'sweetalert2'
export default {
    data() {
        return {

        }
    },
    methods: {
        nullCheck: function (mValue, sType = '', sDateFormat = 'DD-MMM-YYYY HH:mm:ss') {
            let sCheckedValue = '';
            if (sType === 'number') {
                mValue = mValue == undefined ? 0 : mValue;
                sCheckedValue = mValue === null ? '---' : this.convertNumberFormat(mValue);
            } else if (sType === 'date') {
                sCheckedValue = mValue === null ? '---' : this.convertDateFormat(mValue, sDateFormat);
            } else {
                sCheckedValue = mValue === null ? '---' : mValue;
            }
            return sCheckedValue;
        },

        convertNumberFormat: function (fNumber) {
            return parseFloat(fNumber).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },
        convertDateFormat: function (sDate, sFormat) {
            return moment(sDate).format(sFormat);
        },
        showSuccessAlert: function (sDescription, sBtnText = 'Okay got it') {
            Swal.fire({
                title: 'Success!',
                text: sDescription,
                icon: 'success',
                confirmButtonText: sBtnText
            });
        },

        showErrorAlert: function (sErrorDescription, sBtnText = 'Okay got it') {
            Swal.fire({
                title: 'Error!',
                text: sErrorDescription,
                icon: 'error',
                confirmButtonText: sBtnText
            });
        }
    }
}