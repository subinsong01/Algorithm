import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int num; // 입력할 숫자
        int maxNum = Integer.MIN_VALUE; // maxNum 초기화
        int maxIndex = -1; // 최댓값의 위치
        
        for (int i = 0; i < 9; i++) {
            num = sc.nextInt();
            if (num > maxNum) {
                maxNum = num;
                maxIndex = i + 1; // 위치는 1부터 시작하도록 설정
            }
        }
        
        // 최댓값 및 위치 출력
        System.out.println(maxNum);
        System.out.println(maxIndex);
    }
}
