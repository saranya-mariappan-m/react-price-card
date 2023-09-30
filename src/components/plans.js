const pricePlan = [
    {
        'type': 'free',
        'price': 0,
        'tenure': 'month',
        'account': { 'label': 'Single User', 'access': true },
        'storage': { 'label': '50GB storage', 'access': true },
        'project': {
            0: { 'public': 'Unlimited Public Projects', 'access': true },
            1: { 'private': 'Unlimited Private Projects', 'access': false }
        },
        'community': { 'label': 'Community Access', 'access': true },
        'support': { 'label': 'Dedicated Phone Support', 'access': false },
        'subdomain': { 'label': 'Free Subdomain', 'access': false },
        'reports': { 'label': 'Monthly status Reports', 'access': false }
    },
    {
        'type': 'Plus',
        'price': 9,
        'tenure': 'month',
        'account': { 'label': '5 Users', 'access': true },
        'storage': { 'label': '50GB storage', 'access': true },
        'project': {
            0: { 'public': 'Unlimited Public Projects', 'access': true },
            1: { 'private': 'Unlimited Private Projects', 'access': true }
        },
        'community': { 'label': 'Community Access', 'access': true },
        'support': { 'label': 'Dedicated Phone Support', 'access': true },
        'subdomain': { 'label': 'Free Subdomain', 'access': true },
        'reports': { 'label': 'Monthly status Reports', 'access': false }
    },
    {
        'type': 'Pro',
        'price': 49,
        'tenure': 'month',
        'account': { 'label': 'Unlimited Users', 'access': true },
        'storage': { 'label': '50GB storage', 'access': true },
        'project': {
            0: { 'public': 'Unlimited Public Projects', 'access': true },
            1: { 'private': 'Unlimited Private Projects', 'access': true }
        },
        'community': { 'label': 'Community Access', 'access': true },
        'support': { 'label': 'Dedicated Phone Support', 'access': true },
        'subdomain': { 'label': 'Free Subdomain', 'access': true },
        'reports': { 'label': 'Monthly status Reports', 'access': true }
    }
];

export { pricePlan }