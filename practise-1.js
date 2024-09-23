function calculateTax(income, expenses) {
    if (income >= 0 && expenses >= 0 && income >= expenses) {
      let sumIncome = income - expenses;
      let tax = (sumIncome / 100) * 20;
      return tax;
    } else return "Invalid Input";
}
console.log(calculateTax(7000,7000)) 