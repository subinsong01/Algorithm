import java.util.*;

class Edge implements Comparable<Edge> { //정렬방법을 정의

    private int distance; 
    private int nodeA;
    private int nodeB;

    public Edge(int distance, int nodeA, int nodeB) {
        this.distance = distance;
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }

    public int getDistance() {
        return this.distance;
    }

    public int getNodeA() {
        return this.nodeA;
    }

    public int getNodeB() {
        return this.nodeB;
    }

    // 거리(비용)가 짧은 것이 높은 우선순위를 가지도록 설정
    @Override
    public int compareTo(Edge other) {
    return this.distance  - other.distance;

    }
}

public class Main {
	 static int parent[];
	 
	 //Find 연산
	 public static int find(int x) {
		 if(parent[x] != x) {
			 return parent[x] = find(parent[x]);
		 }
		 else {
			 return parent[x];
		 }
	 }
	//Union 연산
	public static void union(int a, int b) {
		a = find(a);
		b = find(b);
		if (a < b) {
			parent[b] = a;
		} else {
			parent[a] = b;
		}
	}
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int M = sc.nextInt();
        
        parent = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            parent[i] = i;
        }

        List<Edge> edges = new ArrayList<>();
        
        for (int i = 0; i < M; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int cost = sc.nextInt();
            edges.add(new Edge(cost, a, b));
        }

        // 간선을 비용 순으로 정렬
        Collections.sort(edges);

        int result = 0;
        int maxEdge = 0;

        // 크루스칼 알고리즘
        for (Edge edge : edges) {
            int cost = edge.getDistance();
            int a = edge.getNodeA();
            int b = edge.getNodeB();
            // 사이클이 발생하지 않는 경우에만 집합에 포함
            if (find(a) != find(b)) {
                union(a, b);
                result += cost;
                maxEdge = cost; // 가장 큰 간선의 비용을 저장
            }
        }

        // 결과에서 가장 큰 간선의 비용을 빼기
        System.out.println(result - maxEdge);
    }
}