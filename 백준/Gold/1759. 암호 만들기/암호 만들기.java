import java.util.Arrays;
import java.util.Scanner;

public class Main {
	
	 private static int L, C;
	 private static char[] arr; // 입력 문자를 저장할 배열
	 private static char[] result; // 조합을 저장할 배열
	 
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		L = sc.nextInt();
		C = sc.nextInt();
		
		arr = new char[C];
		result = new char[L]; // 결과를 저장할 배열 초기화
		
		for (int i = 0; i < C; i++) {
			arr[i] = sc.next().charAt(0);
		}
		
		Arrays.sort(arr); // 문자들을 사전 순으로 정렬
		
		combination(0, 0);
		sc.close();
	}
	
	private static void combination(int cnt, int start) {
		if (cnt == L) { // L개의 문자를 선택한 경우
			if (isValid()) { // 유효성 검사
				System.out.println(new String(result));
			}
			return;
		}
		for (int i = start; i < C; i++) {
			result[cnt] = arr[i];
			combination(cnt + 1, i + 1); // 다음 문자를 선택하도록 재귀 호출
		}
	}
	
	private static boolean isValid() {
		int vowels = 0, consonants = 0;
		for (char c : result) {
			if (isVowel(c)) {
				vowels++;
			} else {
				consonants++;
			}
		}
		return vowels >= 1 && consonants >= 2; // 최소 한 개의 모음과 최소 두 개의 자음이 있는지 확인
	}
	
	private static boolean isVowel(char c) {
		return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'; // 모음인지 확인
	}
}
