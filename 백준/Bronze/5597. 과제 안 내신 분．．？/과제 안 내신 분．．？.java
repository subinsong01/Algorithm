import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int[] arr = new int[31]; // 1부터 30까지의 인덱스를 사용하기 위해 31로 설정
        int num;

        for (int i = 0; i < 28; i++) { // 28개의 입력을 받음
            num = sc.nextInt();
            arr[num] = 1; // 입력받은 곳은 1로 취급 
        }

        int first = 0, second = 0;

        // 배열의 인덱스를 1부터 30까지 순회
        for (int i = 1; i <= 30; i++) {
            if (arr[i] != 1) {
                if (first == 0) {
                    first = i; // 가장 작은 숫자
                } else {
                    second = i; // 두 번째로 작은 숫자
                    break; // 두 번째 숫자를 찾으면 반복을 중단
                }
            }
        }

        System.out.println(first);
        System.out.println(second);
        
        sc.close(); 
    }
}
