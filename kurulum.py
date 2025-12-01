import subprocess
import sys
import platform
import os

def check_and_install_dependencies():
    """
    Gerekli Python paketlerini kontrol eder ve eksik olanları yüklemeye çalışır.
    Çıktıları anlık olarak terminalde gösterir.
    """
    
    required_packages = [
        "flask"
        "flask-SQLAlchemy",
        "flask-Login",
        "flask-WTF",
        "Werkzeug",
        "SQLAlchemy==2.0.23",
        "python-dotenv==1.0.0",
        "requests==2.31.0",
        "Pillow==10.1.0",
        "flask-Login==0.6.3",
        "flask-WTF==1.2.1",
        "Werkzeug==2.3.7",
        "SQLAlchemy==2.0.23",
        "python-dotenv==1.0.0",
        "requests==2.31.0",
        "Pillow==10.1.0",
        "flask-WTF==1.2.1",
        "Werkzeug==2.3.7",
        "SQLAlchemy==2.0.23",
        "python-dotenv==1.0.0",
        "requests==2.31.0",
        "Pillow==10.1.0",
        "email-validator==2.1.0",
        "Flask-Migrate==4.0.5"
    ]
    
    print("====================================================")
    print("         ChatAI PROJESİ KURULUM KONTROLÜ        ")
    print("====================================================")
    print(f"INFO: Çalışma Platformu: {platform.system()} {platform.release()}")
    print(f"INFO: Python Yorumlayıcısı: {sys.executable}")
    
    # Mevcut ortamdaki yüklü paketleri kontrol et
    try:
        reqs = subprocess.check_output([sys.executable, '-m', 'pip', 'freeze']).decode('utf-8')
        installed_packages = {r.split('==')[0].lower(): r for r in reqs.split()}
    except Exception:
        installed_packages = {}

    missing_packages = []
    for package in required_packages:
        if package.lower() not in installed_packages:
            missing_packages.append(package)

    if not missing_packages:
        print("\nBAŞARILI: Tüm gerekli kütüphaneler yüklü.")
        print("Artık 'atlas_gozu.py' dosyasını çalıştırabilirsiniz.")
        return

    # Eksik paketleri yükle
    print(f"\nEKSİK PAKETLER TESPİT EDİLDİ: {', '.join(missing_packages)}")
    print("Yükleme işlemi başlatılıyor... (Tüm çıktıları anlık göreceksiniz)")

    try:
        # Popen kullanarak çıktıyı anlık olarak göster
        print("====================================================")
        process = subprocess.Popen([sys.executable, '-m', 'pip', 'install'] + missing_packages, 
                                   stdout=subprocess.PIPE, stderr=subprocess.STDOUT, bufsize=1, universal_newlines=True)
        
        # Çıktıyı anlık olarak yazdır
        for line in process.stdout:
            sys.stdout.write(line)
            sys.stdout.flush()

        process.wait()
        print("====================================================")
        
        if process.returncode != 0:
            print("\nKRİTİK HATA: Paket yükleme başarısız oldu!")
            print("Lütfen yukarıdaki hata mesajlarını inceleyin.")
        else:
            print("\nBAŞARILI: Eksik kütüphaneler başarıyla yüklendi.")
            print("Artık 'atlas_gozu.py' dosyasını çalıştırabilirsiniz.")
            
    except Exception as e:
        print(f"\nGENEL HATA: Kurulum sırasında bilinmeyen bir hata oluştu. Lütfen Python ve pip ayarlarınızı kontrol edin. Hata: {e}")

if __name__ == "__main__":
    check_and_install_dependencies()