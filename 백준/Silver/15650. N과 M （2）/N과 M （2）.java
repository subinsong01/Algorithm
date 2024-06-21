

import java.util.Scanner;

public class Main {
	
	 private static int n, m;
	 private static int[] arr; // 수열을 저장할 배열
	 
	 public static void main(String[] args) {
		 Scanner sc = new Scanner(System.in);
		 
		 n = sc.nextInt();
		 m = sc.nextInt();
			
		 arr = new int[m];
			
		 combination(0, 1);
		 sc.close();
	}
	 private static void combination(int cnt, int start) {
		 if (cnt == m) { // 수열의 길이가 M이 되면 출력
	            for (int i = 0; i < m; i++) {
	                System.out.print(arr[i] + " ");
	            }
	            System.out.println();
	            return;
	        }
	        for (int i = start; i <= n; i++) {
	            arr[cnt] = i;
	            combination(cnt + 1, i + 1); // 다음 수를 선택하도록 재귀 호출
	        }
	    }
}

