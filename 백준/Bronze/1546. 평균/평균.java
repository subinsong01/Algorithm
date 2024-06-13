
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int N; // 과목의 개수
        N = sc.nextInt();
        
        float[] scores = new float[N];
        float maxScore = 0;
        float sum = 0;
        
        // 점수 입력 및 최댓값 찾기
        for (int i = 0; i < N; i++) {
            scores[i] = sc.nextFloat();
            if (scores[i] > maxScore) {
                maxScore = scores[i];
            }
        }
        
        // 모든 점수를 (점수 / 최댓값) * 100으로 변환하고 합계 계산
        for (int i = 0; i < N; i++) {
            scores[i] = (scores[i] / maxScore) * 100;
            sum += scores[i];
        }
        
        // 평균 계산
        float avg = sum / N;
        
        // 결과 출력
        System.out.println(avg);
        
        sc.close(); // Scanner 닫기
    }
}
