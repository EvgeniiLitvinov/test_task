let selectedPlan = null;

    function selectPlan(planId) {
      document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('selected'));
      const selectedElement = document.getElementById(planId);
      selectedElement.classList.add('selected');
      selectedPlan = planId;
    }

    function confirmPurchase() {
      if (!selectedPlan) {
        alert('Please select a subscription plan.');
        return;
      }

      const planName = selectedPlan === 'monthly' ? 'Monthly' : 'Annual';
      document.getElementById('selectedPlanName').innerText = planName;
      document.getElementById('purchaseModal').classList.add('show');
    }

    function closeModal() {
      document.getElementById('purchaseModal').classList.remove('show');
    }