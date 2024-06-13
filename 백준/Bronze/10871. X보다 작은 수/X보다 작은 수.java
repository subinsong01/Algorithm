import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int N, X; // N= 입력 받을 숫자의 갯수, X = 출력할 기준이 되는 숫자
        int arr[];

        N = sc.nextInt();
        X = sc.nextInt();

        // 배열 크기를 N으로 초기화
        arr = new int[N];
        
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
    
        for (int i = 0; i < N; i++) {
            if (arr[i] < X) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}
