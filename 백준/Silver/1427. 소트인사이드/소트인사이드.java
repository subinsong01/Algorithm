import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        int[] arr = new int[input.length()];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = input.charAt(i) - '0';
        }

        for (int i = 0; i < arr.length; i++) {
            int maxIdx = i;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[maxIdx] < arr[j]) {
                    maxIdx = j;
                }
            }

            if (arr[i] < arr[maxIdx]) {
                int tmp = arr[i];
                arr[i] = arr[maxIdx];
                arr[maxIdx] = tmp;
            }
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
    }
}