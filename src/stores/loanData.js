import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoanData = defineStore('loanData', () => {

    const loanData = ref({
        amount: null,
        term: null,
        interestRate: null,
        totalInterestRate: null,
        acrruedInterest: null,
        totalAcrruedInterest: null,
        processingFee: null,
        receivingAmount: null,
    });

    function updateLoanData(loan) {
            loanData.value.amount = loan.amount,
            loanData.value.term = loan.term,
            loanData.value.interestRate = loan.interestRate,
            loanData.value.totalInterestRate = loan.totalInterestRate,
            loanData.value.acrruedInterest = loan.acrruedInterest,
            loanData.value.totalAcrruedInterest = loan.totalAcrruedInterest,
            loanData.value.processingFee = loan.processingFee,
            loanData.value.receivingAmount = loan.receivingAmount
    };

    return {
        loanData,
        updateLoanData,
    }

});
