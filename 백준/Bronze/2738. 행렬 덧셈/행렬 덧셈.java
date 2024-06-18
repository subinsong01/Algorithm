import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int M = sc.nextInt();
        
        int[][] arr1 = new int[N][M];
        int[][] arr2 = new int[N][M];
        
        // 첫 번째 행렬 입력 받기
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                arr1[i][j] = sc.nextInt();
            }
        } 
        
        // 두번째 행렬 입력 받기
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                arr2[i][j] = sc.nextInt();
            }
        }
        
        // 두 행렬의 합 출력하기
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                System.out.print((arr1[i][j] + arr2[i][j]) + " ");
            }
            System.out.println();
        }
    }
}
