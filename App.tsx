import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  const skills = [
    'React Native', 'TypeScript', 'Docker', 'Git/GitHub',
    'HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'WordPress'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Moderno com Gradiente */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.photoContainer}>
              <Image 
                source={require('./assets/foto.jpeg')}
                style={styles.photo}
              />
              <View style={styles.statusBadge}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Disponível</Text>
              </View>
            </View>
            <Text style={styles.greeting}>Olá, eu sou</Text>
            <Text style={styles.name}>Lucas Vinícios Consani</Text>
            <Text style={styles.title}>✨ Desenvolvedor Full Stack ✨</Text>
            <Text style={styles.subtitle}>
              Transformando ideias em código desde 2020
            </Text>
            
            {/* Botões de Ação */}
            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.primaryButton}
                onPress={() => handlePress('https://wa.me/5515996846066')}
              >
                <Text style={styles.primaryButtonText}>💬 WhatsApp</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.secondaryButton}
                onPress={() => handlePress('mailto:lucas_consani1@hotmail.com')}
              >
                <Text style={styles.secondaryButtonText}>📧 Email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Anos de</Text>
            <Text style={styles.statLabel}>Experiência</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>10+</Text>
            <Text style={styles.statLabel}>Projetos</Text>
            <Text style={styles.statLabel}>Concluídos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5+</Text>
            <Text style={styles.statLabel}>Tecnologias</Text>
            <Text style={styles.statLabel}>Dominadas</Text>
          </View>
        </View>

        {/* Sobre Mim */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>👤</Text>
            <Text style={styles.sectionTitle}>Sobre Mim</Text>
          </View>
          <Text style={styles.aboutText}>
            Desenvolvedor apaixonado por tecnologia com foco em criar soluções 
            inovadoras e eficientes. Experiência sólida em desenvolvimento 
            full stack, desde infraestrutura até interfaces mobile e web.
          </Text>
        </View>

        {/* Informações de Contato */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>📞</Text>
            <Text style={styles.sectionTitle}>Contato</Text>
          </View>
          <View style={styles.contactGrid}>
            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => handlePress('mailto:lucas_consani1@hotmail.com')}
            >
              <Text style={styles.contactIcon}>📧</Text>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>lucas_consani1@hotmail.com</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => handlePress('https://wa.me/5515996846066')}
            >
              <Text style={styles.contactIcon}>📱</Text>
              <Text style={styles.contactLabel}>WhatsApp</Text>
              <Text style={styles.contactValue}>+55 (15) 99684-6066</Text>
            </TouchableOpacity>
            
            <View style={styles.contactCard}>
              <Text style={styles.contactIcon}>📍</Text>
              <Text style={styles.contactLabel}>Localização</Text>
              <Text style={styles.contactValue}>Votorantim, SP</Text>
            </View>
            
            <View style={styles.contactCard}>
              <Text style={styles.contactIcon}>🎂</Text>
              <Text style={styles.contactLabel}>Idade</Text>
              <Text style={styles.contactValue}>26 anos</Text>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🚀</Text>
            <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          </View>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Experiência Profissional */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💼</Text>
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          </View>
          
          <View style={styles.experienceCard}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.jobTitle}>Programador Júnior</Text>
                <Text style={styles.company}>🏢 Delbicos • Freelance</Text>
              </View>
              <View style={styles.experienceBadge}>
                <Text style={styles.experienceBadgeText}>Atual</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Desenvolvedor Full Stack usando React Native, TypeScript e Docker. 
              Experiência no ciclo completo de software, da infraestrutura ao 
              desenvolvimento mobile e web. Focado em Clean Code e versionamento 
              estratégico via Git.
            </Text>
            <View style={styles.techStack}>
              <View style={styles.techBadge}><Text style={styles.techText}>React Native</Text></View>
              <View style={styles.techBadge}><Text style={styles.techText}>TypeScript</Text></View>
              <View style={styles.techBadge}><Text style={styles.techText}>Docker</Text></View>
            </View>
          </View>

          <View style={styles.experienceCard}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.jobTitle}>Estagiário de Redes</Text>
                <Text style={styles.company}>🏛️ Prefeitura de Sorocaba</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Especialista em Suporte de Redes. Experiência na manutenção de 
              fibra óptica e infraestrutura de redes. Competências em segurança 
              de rede, suporte a sistemas de gestão municipal.
            </Text>
          </View>
        </View>

        {/* Formação Acadêmica */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🎓</Text>
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          </View>
          <View style={styles.educationCard}>
            <View style={styles.educationIcon}>
              <Text style={styles.educationEmoji}>🏫</Text>
            </View>
            <View style={styles.educationContent}>
              <Text style={styles.degreeTitle}>Desenvolvimento de Software Multiplataforma</Text>
              <Text style={styles.institution}>Fatec Votorantim</Text>
              <View style={styles.educationBadge}>
                <Text style={styles.educationBadgeText}>Tecnólogo</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Qualificações */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>📜</Text>
            <Text style={styles.sectionTitle}>Certificações & Cursos</Text>
          </View>
          <View style={styles.certificationsList}>
            <View style={styles.certificationItem}>
              <Text style={styles.certIcon}>✓</Text>
              <Text style={styles.certText}>Certificado de WordPress – Taket Academy</Text>
            </View>
            <View style={styles.certificationItem}>
              <Text style={styles.certIcon}>✓</Text>
              <Text style={styles.certText}>Metrologia Industrial Básico – Senai</Text>
            </View>
            <View style={styles.certificationItem}>
              <Text style={styles.certIcon}>✓</Text>
              <Text style={styles.certText}>Eletricista de Manutenção Eletrônica – Senai</Text>
            </View>
            <View style={styles.certificationItem}>
              <Text style={styles.certIcon}>✓</Text>
              <Text style={styles.certText}>Desenvolvimento Web Completo</Text>
            </View>
            <View style={styles.certificationItem}>
              <Text style={styles.certIcon}>🌐</Text>
              <Text style={styles.certText}>Inglês Intermediário</Text>
            </View>
          </View>
        </View>

        {/* Projetos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💻</Text>
            <Text style={styles.sectionTitle}>Projetos Destacados</Text>
          </View>
          
          <View style={styles.projectCard}>
            <Text style={styles.projectEmoji}>🎮</Text>
            <Text style={styles.projectTitle}>Jogo Educativo em Angular</Text>
            <Text style={styles.projectDesc}>
              Desenvolvimento de jogo educativo para ensino de lógica de programação 
              com interface interativa e gamificação.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>Angular</Text>
              <Text style={styles.projectTag}>TypeScript</Text>
              <Text style={styles.projectTag}>Educação</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectEmoji}>🌐</Text>
            <Text style={styles.projectTitle}>Sites Institucionais WordPress</Text>
            <Text style={styles.projectDesc}>
              Criação de sites corporativos com integração de formulários, 
              SEO otimizado e design responsivo.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>WordPress</Text>
              <Text style={styles.projectTag}>PHP</Text>
              <Text style={styles.projectTag}>Web</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectEmoji}>🏦</Text>
            <Text style={styles.projectTitle}>Sistema Bancário em Java</Text>
            <Text style={styles.projectDesc}>
              Projeto acadêmico completo com SQLite, implementação de CRUD 
              e sistema de autenticação.
            </Text>
            <View style={styles.projectTags}>
              <Text style={styles.projectTag}>Java</Text>
              <Text style={styles.projectTag}>SQLite</Text>
              <Text style={styles.projectTag}>Backend</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Vamos trabalhar juntos?</Text>
          <Text style={styles.footerText}>
            Estou sempre aberto a novos desafios e oportunidades
          </Text>
          <TouchableOpacity 
            style={styles.footerButton}
            onPress={() => handlePress('mailto:lucas_consani1@hotmail.com')}
          >
            <Text style={styles.footerButtonText}>Iniciar Conversa 💬</Text>
          </TouchableOpacity>
          <Text style={styles.copyright}>© 2024 Lucas Vinícios Consani</Text>
          <Text style={styles.madeWith}>Feito com ❤️ e React Native</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  scrollView: {
    flex: 1,
  },
  
  // Header Styles
  header: {
    backgroundColor: '#667eea',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    maxWidth: 600,
  },
  photoContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  photoPlaceholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  photoEmoji: {
    fontSize: 64,
  },
  statusBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#10b981',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginRight: 6,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
  greeting: {
    fontSize: 16,
    color: '#e0e7ff',
    marginBottom: 8,
    fontWeight: '500',
  },
  name: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  title: {
    fontSize: 20,
    color: '#fbbf24',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#e0e7ff',
    textAlign: 'center',
    marginBottom: 32,
    fontStyle: 'italic',
  },
  
  // Action Buttons
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#667eea',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },

  // Stats Cards
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop: -30,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 6,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#667eea',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    fontWeight: '600',
  },

  // Section Styles
  section: {
    backgroundColor: '#1a1a2e',
    marginHorizontal: 16,
    marginTop: 20,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.1)',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    flex: 1,
  },

  // About Text
  aboutText: {
    fontSize: 16,
    color: '#d1d5db',
    lineHeight: 26,
  },

  // Contact Cards
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  contactCard: {
    width: '50%',
    padding: 8,
  },
  contactIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  contactLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 6,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contactValue: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },

  // Skills
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillBadge: {
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.4)',
  },
  skillText: {
    color: '#a5b4fc',
    fontSize: 14,
    fontWeight: '600',
  },

  // Experience Cards
  experienceCard: {
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#667eea',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  company: {
    fontSize: 16,
    color: '#a5b4fc',
    marginBottom: 12,
    fontWeight: '600',
  },
  experienceBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  experienceBadgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
  description: {
    fontSize: 15,
    color: '#d1d5db',
    lineHeight: 24,
    marginBottom: 12,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  techBadge: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.4)',
  },
  techText: {
    color: '#fbbf24',
    fontSize: 12,
    fontWeight: '600',
  },

  // Education Card
  educationCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  educationIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  educationEmoji: {
    fontSize: 28,
  },
  educationContent: {
    flex: 1,
  },
  degreeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  institution: {
    fontSize: 15,
    color: '#a5b4fc',
    fontWeight: '600',
    marginBottom: 8,
  },
  educationBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  educationBadgeText: {
    color: '#fbbf24',
    fontSize: 12,
    fontWeight: '600',
  },

  // Certifications
  certificationsList: {
    gap: 12,
  },
  certificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    padding: 16,
    borderRadius: 12,
  },
  certIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#10b981',
  },
  certText: {
    fontSize: 15,
    color: '#d1d5db',
    flex: 1,
    fontWeight: '500',
  },

  // Project Cards
  projectCard: {
    backgroundColor: 'rgba(102, 126, 234, 0.05)',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  projectEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 10,
  },
  projectDesc: {
    fontSize: 15,
    color: '#d1d5db',
    lineHeight: 24,
    marginBottom: 16,
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectTag: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    color: '#fbbf24',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginTop: 40,
    backgroundColor: '#1a1a2e',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 20,
  },
  footerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 24,
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: '#667eea',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 24,
  },
  footerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  copyright: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  madeWith: {
    fontSize: 13,
    color: '#9ca3af',
    fontStyle: 'italic',
  },
});

export default App;
