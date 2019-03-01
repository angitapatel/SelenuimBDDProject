package practicePrograme;

public class Stringdata {
	
	
	public void stringtoChar(String s1){
		
		char[] chardata = s1.toCharArray();
		for (int i=0;i<chardata.length;i++){
		System.out.println("stringval    "+chardata[i]);
		}
		
	}
	public void splitwords(String s1)
	{
	String[] data  =s1.split("");
	for (int i=0;i<data.length;i++){
		System.out.println(data[i]);
		}
	
	}
	
	

	public static void main(String[] args) {
		
		Stringdata ss= new Stringdata();
		//ss.stringtoChar("Javadata");
		ss.splitwords("helloiamtheindia");
		// TODO Auto-generated method stub

	}

}
