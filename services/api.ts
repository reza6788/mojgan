import { OrderFormData } from '../types';

// In a real Next.js or Node app, this would be an axios/fetch call to your API endpoint.
// Example: axios.post('/api/orders', data);

export const submitOrder = async (data: OrderFormData): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    console.log("Submitting order to backend...", data);
    
    // Simulate network delay
    setTimeout(() => {
      resolve({
        success: true,
        message: "Order received successfully"
      });
    }, 2000);
  });
};
