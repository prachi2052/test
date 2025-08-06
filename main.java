public class MultiplyNumbers {
    public static void main(String[] args) {
        int[] nums = {2, 3, 1, 4, 5, 1, 2, 3, 1, 2}; // example 10 numbers
        int product = 1;
        for (int n : nums) {
            product *= n;
        }
        System.out.println("Product of 10 numbers: " + product);
    }
}
